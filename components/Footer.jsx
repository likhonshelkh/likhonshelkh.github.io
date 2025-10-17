import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { Github, Send } from '@geist-ui/icons';
import { Tooltip } from '@geist-ui/core';

export default function Footer() {
  return (
    <footer className="bg-accents-1 text-accents-7 py-8 border-t border-accents-2">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold text-foreground">লিখন শেখ</p>
            <p className="text-sm">© {new Date().getFullYear()} সর্বস্বত্ব সংরক্ষিত</p>
          </div>

          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            <Tooltip text="Telegram" placement="top">
              <a
                href="https://t.me/likhonsheikh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accents-5 hover:text-foreground transition"
                aria-label="Telegram"
              >
                <Send size={24} />
              </a>
            </Tooltip>

            <Tooltip text="GitHub" placement="top">
              <a
                href="https://github.com/likhonsheikh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accents-5 hover:text-foreground transition"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            </Tooltip>
          </div>
        </div>
      </div>
    </footer>
  );
}