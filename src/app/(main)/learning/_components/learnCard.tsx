import { sendDataArduino } from "@/actions/arduino-data-process";

export const Card = ({ card, onNext, isMobile }: any) => {
    return (
      <div className="flex flex-col items-center  rounded-2xl max-w-md relative">
        <div className="w-full h-full rounded-xl overflow-hidden">
          <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
          <div className="absolute inset-x-0 bottom-10 flex flex-col items-center mx-auto w-full px-4 space-y-2">
            <button
              className="w-28 h-10 bg-white text-black rounded-full shadow-md hover:bg-gray-100 flex items-center justify-center"
              onClick={()=>sendDataArduino(card.title)} // Add functionality for Play button if needed
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.752 11.168l-3.197-2.132a1 1 0 00-1.555.832v4.264a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5.004v.01M12 18.995v.01"
                />
              </svg>
              PLAY
            </button>
            {isMobile && (
              <button
                className="w-28 h-10 bg-white text-black rounded-full shadow-md hover:bg-gray-100 flex items-center justify-center"
                onClick={onNext}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.752 11.168l-3.197-2.132a1 1 0 00-1.555.832v4.264a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 5.004v.01M12 18.995v.01"
                  />
                </svg>
                NEXT
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };
  