import React from 'react';
import './Veterinarios.css';

export default function Veterinarios() {
    return (
        <div className="#f8fafc h-screen flex justify-center items-center gap-x-16 text-white">
          <div
            class="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective">
            <div class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
              <div class="absolute backface-hidden border-2 w-full h-full">
                <img src="../../assets/images/medica.png" class="w-full h-full" />
              </div>
              <div
                class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
                <div class="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                  <h1 class="text-3xl font-semibold">Veterinário Gabriel</h1>
                  <p class="my-2">9.5 Rating</p>
                  <p>
                  Profissional dedicado a cuidar da saúde e do bem-estar de animais da Clínica VetPet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>,
        <div className="bg-gray-900 h-screen flex justify-center items-center gap-x-16 text-white">
        <div
          class="w-[500px] h-[420px] bg-transparent cursor-pointer group perspective">
          <div class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div class="absolute backface-hidden border-2 w-full h-full">
              <img src="../../assets/images/medica.png" class="w-full h-full" />
            </div>
            <div
              class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
              <div class="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                <h1 class="text-3xl font-semibold">The King's Man</h1>
                <p class="my-2">9.0 Rating</p>
                <p>
                Profissional dedicado a cuidar da saúde e do bem-estar de animais da Clínica VetPet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>,
      <div className="bg-gray-900 h-screen flex justify-center items-center gap-x-16 text-white">
      <div
        class="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective">
        <div class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div class="absolute backface-hidden border-2 w-full h-full">
            <img src="../../assets/images/eu.jpeg" class="w-full h-full" />
          </div>
          <div
            class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
            <div class="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
              <h1 class="text-3xl font-semibold">Veterinária Maria</h1>
              <p class="my-2">10.0 Rating</p>
              <p>
                Profissional dedicada a cuidar da saúde e do bem-estar de animais da Clínica VetPet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}