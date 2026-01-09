import { exec } from 'child_process';
import { join } from 'path';
import fs from 'fs';

const projectRoot = process.cwd();
const latexDir = join(projectRoot, 'latex');
const outputDir = join(projectRoot, 'public', 'resume');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const command = `
pdflatex -interaction=nonstopmode -output-directory="${outputDir}" resume.tex &&
pdflatex -interaction=nonstopmode -output-directory="${outputDir}" resume.tex
`;

exec(
  command,
  { cwd: latexDir },
  (error, stdout, stderr) => {
    if (error) {
      console.error('LaTeX compilation failed');
      console.error(stderr);
      process.exit(1);
    }

    console.log('✅ Resume compiled successfully');
    console.log(stdout);
  }
);
