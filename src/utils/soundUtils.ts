export const playSpinSound = () => {
  const audioContext = new (window.AudioContext ||
    (window as any).webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  // Casino-like whirring sound
  oscillator.type = "sawtooth";
  oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(
    1000,
    audioContext.currentTime + 1
  );

  gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(
    0.01,
    audioContext.currentTime + 1
  );

  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 1);
};
