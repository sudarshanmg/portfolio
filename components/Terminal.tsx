'use client';

import React, {
  useState,
  KeyboardEvent,
  ReactNode,
  useEffect,
  useRef,
} from 'react';
import { randomAnimal } from '../utils/animalEmojis';

import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Terminal: React.FC = () => {
  const router = useRouter();
  const [input, setInput] = useState<string>('');
  const [showHelp, setShowHelp] = useState(false);
  const [res, setRes] = useState<ReactNode[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [prevInput, setprevInput] = useState<string>(input);

  useEffect(() => {
    scrollToBottom();
  }, [res]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setprevInput(e.target.value);
  };

  const handleEnterKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand();
    }
    if (e.key === 'ArrowUp') {
      setInput(prevInput);
    }
  };

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  const executeCommand = () => {
    const command = input.toLowerCase().trim();
    let result: string = '';

    if (command.startsWith('whoami')) {
      const pattern = /^whoami\s+-r\b/;
      if (pattern.test(command)) {
        // resume link
        result = 'Updating soon...';
      } else {
        result =
          'I am Sudarshan Mallibhat, a generalist hacker. I design the best interfaces, build applications and make machines learn. In my spare time I enjoy simulating hypothetical scenarios in my mind. Putting it more mathematically precise: In the vector space of all possible realities, if you consider our universe, I would most likely explore its orthogonal sub-space.';
      }
    } else if (command.startsWith('hi') || command.startsWith('hello')) {
      result = `Hey visitor ${randomAnimal}!`;
    } else if (command.startsWith('repo')) {
      result = 'https://github.com/sudarshanmg/portfolio';
    } else if (command.startsWith('xp')) {
      const pattern = /^xp\s+-t\b/;
      if (pattern.test(command)) {
        result = `ReactJS, NextJS, TailwindCSS, NodeJS, MongoDB, BaaS, JS, TS, C/C++, Python, Java, Shell`;
      } else {
        result = `Worked as a full-stack developer intern @ Signa-X from Dec-2022 to Mar-2023`;
      }
    } else if (command.startsWith('clear')) {
      result = '';
      setShowHelp(false);
      setRes([]);
    } else if (command.startsWith('works')) {
      result = 'Associate SDE @ Toshiba India';
    } else if (command.startsWith('connect')) {
      const email_pattern = /^connect\s+-e\b/;
      const insta_pattern = /^connect\s+-i\b/;
      const github_pattern = /^connect\s+-g\b/;
      const x_pattern = /^connect\s+-x\b/;

      if (email_pattern.test(command)) {
        result = 'sudarshanmallibhat@gmail.com';
      } else if (insta_pattern.test(command)) {
        result = 'Not available currectly';
      } else if (github_pattern.test(command)) {
        result = 'https://github.com/sudarshanmg';
      } else if (x_pattern.test(command)) {
        result = 'https://twitter.com/pivotanimated';
      } else {
        result =
          'Available on X, GitHub, Instagram and e-mail (Use the appropriate flags!)';
      }
    } else if (command.startsWith('cd')) {
      const about_pattern = /^cd\s+about\b/;
      const projects_pattern = /^cd\s+projects\b/;
      const wall_pattern = /^cd\s+wall\b/;
      if (about_pattern.test(command)) {
        result = 'Redirecting to the about page...';
        router.push('/about');
      } else if (projects_pattern.test(command)) {
        result = 'Redirecting to the projects page...';
        router.push('/projects');
      } else if (wall_pattern.test(command)) {
        result = 'Redirecting to the wall...';
        router.push('/wall');
      } else {
        result = `Available pages: about, wall, projects`;
      }
    } else if (command.startsWith('help')) {
      setShowHelp(true);
    } else if (command.startsWith('exit')) {
      result = 'Haha, nice try! But you cannot exit this terminal 😈';
    } else {
      result = `Command not found: ${command}`;
    }

    setRes((prevOutput: any) => [
      ...prevOutput,
      <div key={res.length}>
        {command !== 'clear' && <span className="text-white">{'> '}</span>}
        {command === 'clear' ? '' : input}
        {command !== 'clear' && <br />}
        <span
          className={clsx(
            'text-lime-500',
            result === `Command not found: ${command}` ||
              command.startsWith('exit')
              ? 'text-red-500'
              : 'text-lime-500'
          )}
        >
          {result.startsWith('https') ? (
            <Link href={result} target="_blank" className="hover:underline">
              ⭧ {result} ⭧
            </Link>
          ) : result.endsWith('@gmail.com') ? (
            <Link
              href={'mailto: ' + result}
              target="_blank"
              className="hover:underline"
            >
              ⭧ {result} ⭧
            </Link>
          ) : (
            result
          )}
        </span>
      </div>,
    ]);

    setInput('');
  };

  const help = (
    <div>
      <div className="text-lime-500">
        <div> {`- type 'hi' to know your animal`}</div>
        <div> {`- use 'cd <page-name>' to go to that page`}</div>
        <div>{`- type 'repo' to go to the github page`}</div>
        <div>
          {' '}
          {`- type 'whoami' to know more about me, use -r flag to get the resume
    link`}
        </div>
        <div>
          {' '}
          {`- type 'xp' to know about my experience, use -t flag to display my toolkit`}
        </div>
        <div>{`- type 'help' to show help`}</div>
        <div> {`- type 'works' to know about my past works`}</div>
        <div>
          {' '}
          {`- type 'connect' to connect with me on 'github (-g)', 'X (-x)', 'instagram (-i), email (-e)'`}
        </div>
        <div> {`- type 'clear' to clear the terminal`}</div>
        <div> {`- Use the up arrow key ( ^ ) to load previous cmd`}</div>
      </div>
    </div>
  );

  return (
    <div
      ref={containerRef}
      className={
        'h-[50vh] m-4 rounded-lg bg-neutral-900 p-4 font-mono shadow-inner shadow-neutral-700  overflow-y-auto text-white scrollbar'
      }
    >
      <div className="text-white">{'> '}hello...</div>
      <div className="text-lime-500">
        <div> {`- type 'help' to know more...`}</div>
      </div>
      <div className="text-md font-mono mb-4">{showHelp && help}</div>

      <div>{res}</div>
      <div className="flex">
        <span className="text-white">{'>'}</span>
        <input
          autoCapitalize="false"
          spellCheck="false"
          autoComplete="off"
          value={input}
          className="bg-transparent outline-none border-none p-0 w-5/6 resize-none pl-2"
          onChange={handleInputChange}
          onKeyDown={handleEnterKey}
          autoFocus
        />
      </div>
    </div>
  );
};

export default Terminal;
