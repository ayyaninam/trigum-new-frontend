"use client"
import React, { useState } from 'react'
import { FaqType } from '@/types'
import { useScopedI18n } from '@/locales/client';

const Accordian = () => {
  
  



    const faqs:FaqType = [
        {
          "title": "Echoes of Eternity",
          "description": "In the vast expanse of the cosmos, where stars twinkle like distant memories, there exists a timeless symphony of existence. 'Echoes of Eternity' invites you on a cosmic journey, where the whispers of celestial bodies weave tales of creation and wonder. From the birth of galaxies to the dance of black holes, each moment unfolds like a chapter in the saga of the universe. Join us as we traverse the cosmic tapestry, exploring the mysteries that lie beyond the bounds of comprehension."
        },
        {
          "title": "Serendipity's Embrace",
          "description": "Life is a tapestry woven with threads of chance and destiny, where serendipity plays the role of a silent orchestrator. 'Serendipity's Embrace' delves into the intricacies of these chance encounters, where the unexpected leads us down uncharted paths and opens doors to new possibilities. From the fleeting glance of a stranger to the serendipitous reunion of long-lost friends, every moment is a stroke of serendipity's brush painting the canvas of our lives. Embark on a journey of synchronicity and discovery, where serendipity's embrace guides us towards the beauty of the unknown."
        },
        {
          "title": "Legends of Lore",
          "description": "In the annals of time, where history and myth intertwine, lie the 'Legends of Lore' - tales of heroes and villains, gods and monsters, woven into the fabric of cultural heritage. From the epic battles of ancient warriors to the enchanting realms of mythical beasts, each legend carries with it the echoes of bygone eras. Journey with us through the mists of time as we unravel the myths and legends that have shaped civilizations and ignited the flames of imagination. Whether it's the heroic exploits of Arthurian knights or the mystical allure of Greek gods, 'Legends of Lore' promises to captivate and inspire with its timeless tales."
        },
        {
          "title": "Sands of Time",
          "description": "In the heart of the desert, where the sun kisses the horizon and the winds whisper ancient secrets, lies a realm untouched by the passage of time. 'Sands of Time' invites you to traverse the shifting dunes and delve into the depths of history buried beneath their golden embrace. From the ruins of lost civilizations to the nomadic tribes that roam the desert expanse, each grain of sand holds a story waiting to be told. Join us on a journey through time and space, where the echoes of the past resonate with the promise of adventure and discovery."
        },
        {
          "title": "Enigma Unveiled",
          "description": "Beneath the surface of the mundane lies a world shrouded in mystery and enigma, waiting to be unveiled. 'Enigma Unveiled' peels back the layers of reality to reveal the hidden truths that lie beneath. From the enigmatic depths of the ocean floor to the unfathomable reaches of the cosmos, each discovery is a revelation that challenges our understanding of the world around us. Join us as we embark on a journey of exploration and enlightenment, where the pursuit of knowledge leads us down paths both familiar and strange. Whether it's unraveling the secrets of the universe or decoding the mysteries of the human mind, 'Enigma Unveiled' promises to ignite the spark of curiosity and wonder within us all."
        }
        
      ]

      const [activeFaq, setActiveFaq] = useState<number | null>(null);

      const toggleFaq = (index: number) => {
        setActiveFaq(index === activeFaq ? null : index);
      };
  return (
    <>
       <div className="container p-2 lg:p-0 mt-10 mx-auto">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`mb-2 mx-auto hs-accordion ${
            index === activeFaq ? 'bg-gray-100 dark:bg-white/10' : 'bg-slate-50'
          } rounded-xl py-4 px-2 border border-orange-400`}
        >
          <button
            className="hs-accordion-toggle flex items-center justify-between w-full p-5  md:text-lg font-semibold text-start text-black  transition "
            onClick={() => toggleFaq(index)}
          >
            <span className="font-serif">{faq.title}</span>

            <svg
              className={`flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-700 dark:text-neutral-400 transition-transform duration-500 ${
                index === activeFaq ? 'rotate-0' : 'rotate-180'
              }`}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          <div
            className={`px-4 hs-accordion-content transition-all duration-500 overflow-hidden ${
              index === activeFaq ? 'h-full opacity-100' : 'h-0 opacity-0'
            }`}
          >
            <p className="text-black mt-2">{faq.description}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default Accordian
