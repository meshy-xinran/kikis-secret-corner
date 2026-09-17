// English dedications for the existing flowers. Original visitor notes remain untouched.
const dedications = [
  'You made an ordinary day feel like home.',
  'There is still a sunny spot here, just for you.',
  'Small paws. A love that stays.',
  'I miss the little sound of you following me.',
  'Sleep softly, my sweetest friend.',
  'Thank you for choosing me as your person.',
  'Every quiet morning holds a little of you.',
  'You left paw prints on all my favorite memories.',
  'I hope the stars feel as warm as your favorite blanket.',
  'A flower for every time you made me smile.',
  'I still look for you in the afternoon light.',
  'You were my smallest, greatest adventure.',
  'May your dreams be full of sunbeams.',
  'Your place in my heart will always be yours.',
  'For the naps, the mischief, and the midnight cuddles.',
  'I carry your gentle company with me.',
  'Some love is too soft for words.',
  'I would choose every moment with you again.',
  'The world was kinder with you beside me.',
  'Loved in every season. Remembered in every bloom.',
  'A little light for my little shadow.',
  'Your purr is a song I will never forget.',
  'You taught me how beautiful a quiet life can be.',
  'Wherever you are, I hope there are boxes to explore.',
  'One more flower. One more thank you.',
  'You are part of every place I call home.',
  'Rest among the flowers, dear one.',
  'Our time was small. Our love was not.',
  'I remember your warmth more than the goodbye.',
  'A soft place to land, a love without an end.',
  'You will always be my favorite hello.',
  'Until we find the same sunbeam again.'
];
const openings=['A little flower','A quiet wish','A golden bloom','A gentle thought','A small light','A warm memory','A soft promise','A tender thank you'];
const endings=['for the joy you brought home.','for your sleepy morning company.','for every little adventure we shared.','for the comfort of your purr.','for all those sunlit afternoons.','for the love that stays with me.','for your wonderfully curious heart.','for my dearest little friend.','for every paw print in my heart.','for the sweetest ordinary moments.','for the warmth you left behind.','for the days we spent together.','for a friendship beyond words.','for the kindness in your gentle eyes.','for the peace you gave me.','for our own small, beautiful world.','for every time you curled up beside me.','for the home we found in each other.','for all your playful little surprises.','for a love I will always carry.','for our quiet evenings together.','for you, wherever the stars may lead.','for the happiness of knowing you.','for the memories still growing here.','for the naps we never wanted to end.','for the softest part of my life.','for the light in every memory.','for my companion in every season.'];
export function flowerMessage(id){return dedications[id]||`${openings[(id-32)%openings.length]} ${endings[Math.floor((id-32)/openings.length)%endings.length]}`;}

const names=['Mia','sunbeam.sophie','Oliver','Luna & Me','Maple','Theo','littlecloud','Amelia','Nora','peachypaws','Leo','Willow','Hazel','moonmilk','Eli','Juniper','softestdays','Isla','Charlie','stargazer.jo','Poppy','Arlo','Lily','mossandtea','Finn','Cleo','Emmy','Rowan','honeytoast','Jules','Kit','Wren'];
export function flowerName(id){return names[id%names.length];}
