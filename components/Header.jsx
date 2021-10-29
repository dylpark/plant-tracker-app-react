//
//

import Image from "next/image";

export default function Header() {
  return (
    <header className="">
      {/* <div><HeaderItem /></div>
      <div><HeaderItem /></div> */}
      <Image
        className="object-contain"
        src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-plant-nature-resource-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"
        width={60}
        height={60}
      />
    </header>
  );
}
