"use client";

import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Button } from '../ui/button';

const AudioRecorder = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [audioData, setAudioData] = useState(null);
    const [error, setError] = useState('');
    const [audioBlob, setAudioBlob] = useState(null); 

    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);

    // Start recording function
    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorderRef.current = new MediaRecorder(stream);

            // Handle data available after stopping
            mediaRecorderRef.current.ondataavailable = (event) => {
                audioChunksRef.current.push(event.data);
            };

            // Handle stop and assemble audio chunks
            mediaRecorderRef.current.onstop = () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
                setAudioBlob(audioBlob); // Store the Blob in the state
                const audioUrl = URL.createObjectURL(audioBlob);
                setAudioData(audioUrl);
                audioChunksRef.current = [];
            };
        

            // Start recording
            mediaRecorderRef.current.start();
            setIsRecording(true);
        } catch (err) {
            setError('Failed to start recording: ' + err.message);
        }
    };

    // Stop recording
    const stopRecording = () => {
        mediaRecorderRef.current.stop();
        setIsRecording(false);
    };

    // Send audio data
    const sendAudio = async () => {
        try {
            const formData = new FormData();
            const filename = `recording-${new Date().toISOString()}.wav`; // Customize the filename as needed
            const contentType = 'audio/wav';
            formData.append('file', audioBlob, { filename: filename, contentType: contentType });
            formData.append('model', 'whisper-1');
            const response = await axios.post( 'https://api.openai.com/v1/audio/transcriptions', formData, {
                headers: {
                    // ...formData.getHeaders(),
                    // 'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + process.env.OPENAI_API_KEY,
                },
            });
            console.log(response.data);
            // Handle response here
        } catch (err) {
            setError('Failed to send audio: ' + err.message);
        }
    };

    return (
        <div className="p-4 dark:bg-gray-800 bg-white">
            {error && <p className="text-red-500">{error}</p>}
            <Button onClick={isRecording ? stopRecording : startRecording} color="primary">
                {isRecording ? 'Stop Recording' : 'Start Recording'}
            </Button>
            {audioData && (
                <div>
                    <Button onClick={sendAudio} color="secondary">
                        Send Audio
                    </Button>
                    <audio controls src={audioData}></audio>
                </div>
            )}
        </div>
    );
};

export default AudioRecorder;