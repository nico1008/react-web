import React, { useState, useRef } from 'react';
import { Box, useColorMode } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';

export default function Animation() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const controls = useAnimation();
  const [isRolling, setIsRolling] = useState(false);
  const dragStartY = useRef(0);
  const dragStartX = useRef(0);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: '40vh',
    perspective: '1000px',
    cursor: 'grab',
  };

  const handleDragStart = (event, info) => {
    if (isRolling) return;
    dragStartY.current = info.point.y;
    dragStartX.current = info.point.x;
  };

  const handleDragEnd = async (event, info) => {
    if (isRolling) return;
    setIsRolling(true);

    const throwForceY = (dragStartY.current - info.point.y) * 2;
    const throwForceX = (dragStartX.current - info.point.x) * 2;
    
    const baseRotations = 720;
    const rotationsX = baseRotations + Math.round((throwForceY / 100) * 360);
    const rotationsY = baseRotations + Math.round((throwForceX / 100) * 360);

    await controls.start({
      rotateX: rotationsX,
      rotateY: rotationsY,
      transition: {
        duration: 6,
        ease: [0.32, 0.72, 0.35, 0.98],
        type: "tween"
      }
    }).then(() => {
      controls.start({
        rotateX: Math.round(rotationsX / 90) * 90,
        rotateY: Math.round(rotationsY / 90) * 90,
        transition: {
          duration: 0.3,
          type: "spring",
          stiffness: 200,
          damping: 20
        }
      });
    });

    setIsRolling(false);
  };

  const faces = [
    { rotateY: 0, dots: [[50, 50]] },
    { rotateY: 180, dots: [[30, 30], [70, 70]] },
    { rotateY: 90, dots: [[30, 30], [50, 50], [70, 70]] },
    { rotateY: -90, dots: [[30, 30], [30, 70], [70, 30], [70, 70]] },
    { rotateX: 90, dots: [[30, 30], [30, 70], [50, 50], [70, 30], [70, 70]] },
    { rotateX: -90, dots: [[30, 30], [30, 50], [30, 70], [70, 30], [70, 50], [70, 70]] },
  ];

  return (
    <Box sx={containerStyle}>
      <motion.div
        animate={controls}
        drag
        dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
        dragElastic={0.7}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        style={{
          width: '150px',
          height: '150px',
          position: 'relative',
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.1 }}
        whileDrag={{ scale: 1.1, cursor: 'grabbing' }}
      >
        {faces.map((face, index) => (
          <Box
            key={index}
            as={motion.div}
            position="absolute"
            width="100%"
            height="100%"
            background={isDark 
              ? 'linear-gradient(135deg, #2D3748 0%, #1A202C 100%)' 
              : '#FFFFFF'}
            boxShadow={isDark 
              ? '0 0 20px rgba(66, 153, 225, 0.15)' 
              : '0 0 10px rgba(0, 0, 0, 0.1)'}
            borderRadius="20px"
            border={isDark 
              ? '2px solid rgba(66, 153, 225, 0.3)' 
              : '2px solid rgba(0, 0, 0, 0.2)'}
            style={{
              transform: `${face.rotateY ? `rotateY(${face.rotateY}deg)` : ''} 
                         ${face.rotateX ? `rotateX(${face.rotateX}deg)` : ''} 
                         translateZ(75px)`,
              backfaceVisibility: 'hidden',
              transformOrigin: 'center center',
              backgroundColor: isDark ? '#1A202C' : '#FFFFFF',
              backgroundImage: isDark 
                ? 'linear-gradient(135deg, #2D3748 0%, #1A202C 100%)' 
                : 'none',
              WebkitBackfaceVisibility: 'hidden',
              MozBackfaceVisibility: 'hidden',
            }}
            _before={{
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: '20px',
              background: isDark ? '#1A202C' : '#FFFFFF',
              zIndex: -1,
            }}
          >
            {face.dots.map((dot, i) => (
              <Box
                key={i}
                position="absolute"
                left={`${dot[0]}%`}
                top={`${dot[1]}%`}
                transform="translate(-50%, -50%)"
                width="20px"
                height="20px"
                borderRadius="50%"
                bg={isDark ? '#63B3ED' : 'black'}
                boxShadow={isDark 
                  ? '0 0 10px rgba(99, 179, 237, 0.5)' 
                  : 'none'}
              />
            ))}
          </Box>
        ))}
      </motion.div>
    </Box>
  );
}