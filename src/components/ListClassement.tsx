export default function ListClassement() {
    return (
        <ul className="list bg-base-100 rounded-box shadow-md w-full">
  
            <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Ton rang dans le classement</li>
            
            <li className="list-row w-full">
                <div className="text-4xl font-thin opacity-30 tabular-nums">01</div>
                <div><img className="size-10 rounded-box" alt="Tailwind CSS list item" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
                <div className="list-col-grow">
                <div>Dio Lupa</div>
                <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
                </div>
            </li>
            
            <li className="list-row">
                <div className="text-4xl font-thin opacity-30 tabular-nums">02</div>
                <div><img className="size-10 rounded-box" alt="Tailwind CSS list item" src="https://img.daisyui.com/images/profile/demo/4@94.webp"/></div>
                <div className="list-col-grow">
                <div>Ellie Beilish</div>
                <div className="text-xs uppercase font-semibold opacity-60">Bears of a fever</div>
                </div>
            </li>
            
            <li className="list-row">
                <div className="text-4xl font-thin opacity-30 tabular-nums">03</div>
                <div><img className="size-10 rounded-box" alt="Tailwind CSS list item" src="https://img.daisyui.com/images/profile/demo/3@94.webp"/></div>
                <div className="list-col-grow">
                <div>Sabrino Gardener</div>
                <div className="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
                </div>
            </li>
            
            </ul>
    )
}