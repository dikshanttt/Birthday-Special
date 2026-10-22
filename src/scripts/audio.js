// =============================================================================
// AUDIO CONTROLLER & MUSIC BOX SYNTHESIZER
// =============================================================================
// Provides zero-dependency gentle music box melody and celebratory sound FX.
// If an audio file is placed in /public/audio/bgm.mp3, it plays that instead!
// =============================================================================

class SoundController {
  constructor() {
    this.audioCtx = null;
    this.isPlaying = false;
    this.audioElement = null;
    this.melodyTimer = null;
    this.melodyNoteIndex = 0;
    this.isMuted = false;
    this.hasCustomAudio = false;
  }

  init() {
    if (!this.audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioCtxClass();
    }
    
    // Check if custom bgm.mp3 exists
    if (!this.audioElement) {
      this.audioElement = new Audio('./audio/bgm.mp3');
      this.audioElement.loop = true;
    }
  }

  // Gentle music box note player using Web Audio API
  playMusicBoxNote(frequency, duration = 1.2, time = 0) {
    if (!this.audioCtx) this.init();
    if (!this.audioCtx) return;

    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    const now = this.audioCtx.currentTime + time;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    // Warm, bell-like timbre (sine + subtle harmonic warmth)
    osc.type = 'sine';
    osc.frequency.setValueAtTime(frequency, now);

    // Fast attack, gentle decay (music box style)
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.18, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(now);
    osc.stop(now + duration);
  }

  // Soft "Happy Birthday" melody in music box scale (C major / G major)
  startMusicBoxLoop() {
    // Note frequencies (Hz)
    const notes = {
      C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.00,
      A4: 440.00, B4: 493.88, C5: 523.25, D5: 587.33, E5: 659.25,
      F5: 698.46, G5: 783.99, A5: 880.00
    };

    // Happy birthday score with durations (beats)
    const score = [
      { note: notes.G4, beats: 1 },
      { note: notes.G4, beats: 1 },
      { note: notes.A4, beats: 2 },
      { note: notes.G4, beats: 2 },
      { note: notes.C5, beats: 2 },
      { note: notes.B4, beats: 4 },

      { note: notes.G4, beats: 1 },
      { note: notes.G4, beats: 1 },
      { note: notes.A4, beats: 2 },
      { note: notes.G4, beats: 2 },
      { note: notes.D5, beats: 2 },
      { note: notes.C5, beats: 4 },

      { note: notes.G4, beats: 1 },
      { note: notes.G4, beats: 1 },
      { note: notes.G5, beats: 2 },
      { note: notes.E5, beats: 2 },
      { note: notes.C5, beats: 2 },
      { note: notes.B4, beats: 2 },
      { note: notes.A4, beats: 3 },

      { note: notes.F5, beats: 1 },
      { note: notes.F5, beats: 1 },
      { note: notes.E5, beats: 2 },
      { note: notes.C5, beats: 2 },
      { note: notes.D5, beats: 2 },
      { note: notes.C5, beats: 5 },
      // Rest
      { note: null, beats: 3 }
    ];

    const beatDurationMs = 380; // Gentle, relaxing tempo

    const playNext = () => {
      if (!this.isPlaying) return;

      const current = score[this.melodyNoteIndex];
      if (current.note) {
        this.playMusicBoxNote(current.note, 1.4);
      }

      const wait = current.beats * beatDurationMs;
      this.melodyNoteIndex = (this.melodyNoteIndex + 1) % score.length;
      this.melodyTimer = setTimeout(playNext, wait);
    };

    playNext();
  }

  toggleMusic() {
    this.init();
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  play() {
    this.isPlaying = true;
    this.init();

    // First attempt to play custom audio if available
    if (this.audioElement) {
      const playPromise = this.audioElement.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // If the user cancelled while waiting for play to resolve
            if (!this.isPlaying) {
              this.audioElement.pause();
              this.audioElement.currentTime = 0;
              return;
            }
            this.hasCustomAudio = true;
          })
          .catch(() => {
            // Custom audio file not found or rejected: fall back to gentle music box synthesizer
            this.hasCustomAudio = false;
            if (this.isPlaying) {
              this.startMusicBoxLoop();
            }
          });
        return;
      }
    }

    this.startMusicBoxLoop();
  }

  stop() {
    this.isPlaying = false;
    if (this.melodyTimer) {
      clearTimeout(this.melodyTimer);
      this.melodyTimer = null;
    }
    if (this.audioElement) {
      this.audioElement.pause();
      this.audioElement.currentTime = 0;
    }
  }

  // Celebratory harp / chime cascade sound effect
  playChime() {
    this.init();
    if (!this.audioCtx) return;
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    const chords = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // C5 - E5 - G5 - C6 - E6
    chords.forEach((freq, idx) => {
      this.playMusicBoxNote(freq, 1.6, idx * 0.08);
    });
  }

  // Gentle candle blow "whoosh & sparkle" sound
  playCandleBlow() {
    this.init();
    if (!this.audioCtx) return;
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    // Soft airy whoosh followed by high delicate sparkles
    const now = this.audioCtx.currentTime;
    
    // Sparkle chimes
    const sparkles = [880, 1046.5, 1318.5, 1760];
    sparkles.forEach((freq, idx) => {
      this.playMusicBoxNote(freq, 1.0, idx * 0.1);
    });
  }

  // Cute pop sound
  playPop() {
    this.init();
    if (!this.audioCtx) return;
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(400, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.08);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.08);
  }
}

export const soundController = new SoundController();
