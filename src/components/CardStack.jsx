"use client";

import { ChevronRight } from "lucide-react";
import React, { useEffect, useRef } from "react";

const SlidingCards = ({ cards, className }) => {
  const cardStackRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const stack = cardStackRef.current;
    if (!stack) return;

    cardsRef.current = Array.from(stack.querySelectorAll(".card"));

    let isSwiping = false;
    let startX = 0;
    let currentX = 0;

    /** 🟦 Compact stacked positions (fewer cards visible) */
    const updatePositions = () => {
      cardsRef.current.forEach((card, i) => {
        const offset = i;

        const moveY = offset * 6;     // reduced Y spacing
        const moveZ = offset * -6;    // reduced depth

        card.style.zIndex = 100 - i;
        card.style.transform = `
          perspective(800px)
          translateY(${moveY}px)
          translateZ(${moveZ}px)
        `;
        card.style.opacity = 1;
      });
    };

    /** 🟦 Straight swipe movement (no tilt) */
    const applySwipeStyles = (deltaX) => {
      const card = cardsRef.current[0];
      if (!card) return;

      card.style.transform = `
        perspective(800px)
        translateX(${deltaX}px)
      `;
    };

    const handleStart = (x) => {
      isSwiping = true;
      startX = currentX = x;

      const card = cardsRef.current[0];
      if (card) card.style.transition = "none";
    };

    const handleMove = (x) => {
      if (!isSwiping) return;
      currentX = x;
      const deltaX = x - startX;

      applySwipeStyles(deltaX);
    };

    const handleEnd = () => {
      if (!isSwiping) return;
      isSwiping = false;

      const deltaX = currentX - startX;
      const threshold = 60;
      const card = cardsRef.current[0];

      if (!card) return;

      card.style.transition = "300ms ease";

      if (Math.abs(deltaX) > threshold) {
        const direction = Math.sign(deltaX);

        card.style.transform = `
          translateX(${direction * 350}px)
        `;

        setTimeout(() => {
          cardsRef.current = [...cardsRef.current.slice(1), card];
          updatePositions();
        }, 280);
      } else {
        updatePositions();
      }
    };

    stack.addEventListener("pointerdown", (e) => handleStart(e.clientX));
    stack.addEventListener("pointermove", (e) => handleMove(e.clientX));
    stack.addEventListener("pointerup", handleEnd);

    updatePositions();
  }, []);

  return (

      <div className="flex lg:hidden justify-center items-center">
        <section
        ref={cardStackRef}
        className={`relative w-64 h-72 grid place-content-center select-none touch-none ${className}`}
      >
        {cards?.map((card) => (
          <article
            key={card.id}
            className="card absolute inset-2 rounded-xl overflow-hidden shadow-xl cursor-grab transition-transform"
            style={{
              backgroundImage: `url(${card.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Tagline */}
            <div className="absolute top-3 w-full text-center px-2">
              <p className="text-white text-sm font-medium drop-shadow-md">
                {card.tagline}
              </p>
            </div>

            {/* Title */}
            <div className="absolute top-10 w-full text-center px-3">
              <h2 className="text-white text-3xl font-bold drop-shadow-lg">
                {card.title}
              </h2>
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-0 w-full bg-linear-to-t from-black/90 to-transparent p-4">
              <h3 className="text-white text-lg font-semibold">
                {card.title}
              </h3>
              <p className="text-white text-sm opacity-80">
                Starting Price Rs. {card.price}
              </p>
            </div>
          </article>
        ))}
      </section>
      </div>
  );
};

export default SlidingCards;