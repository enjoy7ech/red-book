class StudyRecorder extends AudioWorkletProcessor {
 constructor(){super();this.samples=new Float32Array(2048);this.position=0;}
 process(inputs){const audio=inputs[0]?.[0];if(audio){for(const sample of audio){this.samples[this.position++]=sample;if(this.position===2048){const samples=this.samples;let sum=0;for(const value of samples)sum+=value*value;this.port.postMessage({samples,rms:Math.sqrt(sum/samples.length)},[samples.buffer]);this.samples=new Float32Array(2048);this.position=0;}}}return true;}
}
registerProcessor('study-recorder',StudyRecorder);
