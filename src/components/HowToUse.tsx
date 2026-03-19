"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './HowToUse.module.css';

export default function HowToUse() {
  const [isUploading, setIsUploading] = React.useState(false);
  const [showSignup, setShowSignup] = React.useState(false);
  const [isDragging, setIsDragging] = React.useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleFile = (file: File | undefined) => {
    if (!file) return;
    setIsUploading(true);
    // Simulate AI processing
    setTimeout(() => {
      setIsUploading(false);
      setShowSignup(true);
    }, 2000);
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = () => {
    setIsDragging(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    handleFile(file);
  };

  const stages = [
    {
      number: 1,
      title: "Upload Assets",
      desc: "Drag and drop your image or model here to see our AI in action.",
      content: (
        <div
          className={`${styles.uploadDropzone} ${isDragging ? styles.dragging : ''}`}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          {/* This input is hidden via CSS but still functional */}
          <input
            type="file"
            ref={fileInputRef}
            className={styles.hiddenInput}
            onChange={onFileInputChange}
            accept="image/*,.glb,.usdz,.obj"
          />

          {showSignup ? (
            <div className={styles.signupPrompt}>
              <div className={styles.successIcon}>✓</div>
              <p className={styles.signupTitle}>Model Ready!</p>
              <button className={styles.signupButton}>Create Free Account</button>
              <button
                className={styles.resetLink}
                onClick={(e) => {
                  e.stopPropagation();
                  setShowSignup(false);
                }}
              >
                Upload another
              </button>
            </div>
          ) : (
            <>
              <div className={styles.uploadIcon}>
                {isUploading ? (
                  <div className={styles.loader}></div>
                ) : (
                  <div className={styles.dropCircle}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="17 8 12 3 7 8"></polyline>
                      <line x1="12" y1="3" x2="12" y2="15"></line>
                    </svg>
                  </div>
                )}
              </div>
              <div className={styles.textStack}>
                <p className={styles.uploadStatus}>
                  {isUploading ? 'AI is Processing...' : isDragging ? 'Drop it here' : 'Click or Drag & Drop'}
                </p>
                {!isUploading && !isDragging && (
                  <p className={styles.uploadHint}>Support for JPG, PNG, GLB</p>
                )}
              </div>
            </>
          )}
        </div>
      )
    },
    {
      number: 2,
      title: "Get QR Ready",
      desc: "Your unique AR QR code is generated instantly. Customize it to match your branding.",
      content: (
        <div className={styles.qrPreview}>
          <div className={styles.scanLine}></div>
          <div className={styles.qrInner}>
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <rect x="7" y="7" width="3" height="3"></rect>
              <rect x="14" y="7" width="3" height="3"></rect>
              <rect x="7" y="14" width="3" height="3"></rect>
              <path d="M14 14h3v3h-3z"></path>
            </svg>
          </div>
        </div>
      )
    },
    {
      number: 3,
      title: "Scan & Experience",
      desc: "Point your camera at the QR code to experience 3D/AR directly in your browser.",
      content: (
        <div className={styles.arExperience}>
          <div className={styles.arVisual}></div>
          <div className={styles.scanBadge}>AR ACTIVE</div>
        </div>
      )
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Simple 3-Step Process</h2>
          <p className={styles.subtitle}>
            Transform your digital assets into immersive AR experiences in minutes.
          </p>
        </motion.div>

        <div className={styles.stagesGrid}>
          {stages.map((stage, index) => (
            <motion.div
              key={index}
              className={styles.stageCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className={styles.visualCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.dot}></div>
                  <div className={styles.dot}></div>
                  <div className={styles.dot}></div>
                </div>
                <div className={styles.cardContent}>
                  {stage.content}
                </div>
              </div>
              <div className={styles.stageNumber}>{stage.number}</div>
              <h3 className={styles.stageTitle}>{stage.title}</h3>
              <p className={styles.stageDesc}>{stage.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
