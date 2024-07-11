import { Section } from '@site/src/pages/_components/section';
import { SectionHeading } from '@site/src/pages/_components/section-heading';
import { SectionTag } from '@site/src/pages/_components/section-tag';
import React from 'react';
import styles from './webassembly-components.module.css';

type Props = {};

function WebAssemblyComponents({}: Props) {
  return (
    <Section color="light-gray" id="webassembly-components">
      <div className="container">
        <div className={styles.content}>
          <div>
            <SectionTag>WebAssembly Components</SectionTag>
            <SectionHeading>New to Components?</SectionHeading>
            <p>
              WebAssembly components are a fundamentally finer-grained abstraction for application
              composition and need a Wasm-specific orchestrator to take best advantage of them.
            </p>
            <p>
              <a href="">Read our components starter guide</a>
            </p>
          </div>
          <div>
            {/* component image */}
            {/* component image */}
          </div>
        </div>
      </div>
    </Section>
  );
}

export { WebAssemblyComponents };
