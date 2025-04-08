import React, { useEffect, useState } from 'react';
import '../assets/styles/Resources.scss';
import * as FaIcons from 'react-icons/fa';
import rawresources from '../data/resources.json';

type ResourceItem =
  | { type: 'list'; text: string; link?: string }
  | { type: 'tile'; title: string; steps: { label: string; code: string; link?: string }[] };

type ResourceGroup = {
  category: string;
  content: ResourceItem[];
};

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const CopyIcon = FaIcons.FaCopy as unknown as React.FC;
  const [copied, setCopied] = useState(false);
  const [data, setData] = useState<ResourceGroup[]>([]);

  useEffect(() => {
    setData(rawresources as ResourceGroup[]);
  }, []);

  const highlight = (text: string) => {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.split(regex).map((part, i) =>
      regex.test(part) ? <mark key={i}>{part}</mark> : part
    );
  };

  const copyCode = async (code: string) => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const categories = ['All', ...Array.from(new Set(data.map(d => d.category)))];

  const filtered = data
    .filter(section => selectedCategory === 'All' || section.category === selectedCategory)
    .map(section => ({
      ...section,
      content: section.content
        .map((item): ResourceItem | null => {
          if (item.type === 'list') {
            return item.text.toLowerCase().includes(searchTerm.toLowerCase()) ? item : null;
          }
          if (item.type === 'tile') {
            const matchedSteps = item.steps.filter(step =>
              step.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
              step.code.toLowerCase().includes(searchTerm.toLowerCase())
            );
            if (
              item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              matchedSteps.length > 0
            ) {
              return { ...item, steps: matchedSteps };
            }
          }
          return null;
        })
        .filter((item): item is ResourceItem => item !== null)
    }))
    .filter(section => section.content.length > 0);

  return (
    <div className="resources-container" id="resources">
      {copied && <div className="copy-toast">Copied to clipboard!</div>}
      <h1 className="resources-header">🛠️ Hacks / Fixes</h1>

      <div className="resources-controls">
        <input
          type="text"
          placeholder="Search resources..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          {categories.map(cat => <option key={cat}>{cat}</option>)}
        </select>
      </div>

      {filtered.map((section, sectionIdx) => (
        <div key={sectionIdx} className="resource-group">
          <h2>{section.category}</h2>
          {section.content.map((item, idx) => {
            if (item.type === 'list') {
              return (
                <ul key={idx}>
                  <li>
                    {highlight(item.text)}
                    {'link' in item && item.link && (
                      <>
                        {' '}
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="external-link"
                        >
                          🔗 Link
                        </a>
                      </>
                    )}
                  </li>
                </ul>
              );
            } else if (item.type === 'tile') {
              return (
                <div key={idx} className="resource-tile">
                  <h3>{highlight(item.title)}</h3>
                  <ol className="code-steps">
                    {item.steps.map((step, i) => (
                      <li key={i}>
                        <strong>{highlight(step.label)}</strong>
                        <div className="code-container">
                          <pre>{highlight(step.code)}</pre>
                          {step.link && (
                            <div className="external-link">
                              <a href={step.link} target="_blank" rel="noopener noreferrer">
                                🔗 External Doc
                              </a>
                            </div>
                          )}
                          <button className="copy-btn" onClick={() => copyCode(step.code)}>
                            <CopyIcon />
                          </button>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              );
            } else return null;
          })}
        </div>
      ))}
    </div>
  );
};

export default Resources;
