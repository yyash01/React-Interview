import { useState } from 'react';
import { FaCircle, FaAngleDown, FaAngleRight } from 'react-icons/fa';
import {AnimatePresence, motion} from 'framer-motion';

const Icon = ({ isOpen, isParentNode, onSmash }) => {
  if (isParentNode) {
    return (
      <div className="icon" onClick={onSmash}>
        {isOpen ? <FaAngleDown /> : <FaAngleRight />}
      </div>
    );
  }
  return (
    <FaCircle
      style={{
        height: '6px',
      }}
    />
  );
};

const Node = ({ label, link, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isParentNode = Boolean(children && children.length);

  return (
    <div className="node">
      <li>
        <Icon
          isOpen={isOpen}
          isParentNode={isParentNode}
          onSmash={() => setIsOpen(!isOpen)}
        />
        <div className="label">
          <a href={link}>{label}</a>
        </div>
      </li>
      <AnimatePresence> 
        {isParentNode && isOpen ? (
          <motion.div className='node-content'
            variants={{
              collapsed : {
                height: 0,
                opacity: 0
              },
              open : {
                height: "auto",
                opacity: 1
              }
            }}
            initial='collapsed'
            animate="open"
            exit="collapsed"
          >
            <Nodes nodes={children} />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

const Nodes = ({ nodes }) => {
  return (
    <ul className="nodes">
      {nodes.map((node) => {
        return <Node key={node.Id} {...node} />;
      })}
    </ul>
  );
};

export default Nodes;
