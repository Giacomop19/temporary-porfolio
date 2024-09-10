"use client"
import { AnimatePresence, motion } from "framer-motion";
import { useState, ReactNode, Dispatch, SetStateAction } from "react";
import { VerticalText } from "./verticalText";


const IconSideNav = () => {
  return (
    <div className="">
      <SideNav />
    </div>
  );
};

interface RefProps{
  children: ReactNode,
  selected:boolean,
  id:number,
  setSelected: (Dispatch<SetStateAction<number>>)
}

const SideNav = () => {
  const [selected, setSelected] = useState(0);

  return (
    <nav className="w-fit  p-4 flex flex-col items-center gap-2">
      <NavItem selected={selected === 0} id={0} setSelected={setSelected}>
        <VerticalText href="#about">ABOUT</VerticalText>
      </NavItem>
      <NavItem selected={selected === 1} id={1} setSelected={setSelected}>
        <VerticalText href="#projects">PROJECTS</VerticalText>
      </NavItem>
      <NavItem selected={selected === 2} id={2} setSelected={setSelected}>
        <VerticalText href="#experience">EXPERIENCE</VerticalText>
      </NavItem>
    </nav>
  );
};

const NavItem = ({ children, selected, id, setSelected }: RefProps) => {
  return (
    <motion.button
      className="p-3 bg-transparent hover:bg-slate-700 rounded-md transition-colors relative"
      onClick={() => setSelected(id)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="block relative z-10">{children}</span>
      <AnimatePresence>
        {selected && (
          <motion.span
            className="absolute inset-0 rounded-md bg-indigo-600 z-0"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          ></motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default IconSideNav;