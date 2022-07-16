import { Children } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "../Icons";

function Section({ title, more = false, items }) {

    const imageStyle = item => {
        switch(item.type){
            case 'album' : 
                return 'rounded-full'
            case 'podcast':
                return 'rounded-lg'
            default:
                return 'rounded'
        }
    }

  return (
    <section>
      <header className="flex items-center justify-between mb-4">
        <h3 className="text-2xl text-white font-semibold tracking-tight">
          {title}
        </h3>
        {more && (
          <NavLink
            className={
              "text-xs hover:underline font-semibold uppercase text-link tracking-wider"
            }
            to={more ?? '#'}
          >
            SEE ALL
          </NavLink>
        )}
      </header>
      <div className="grid grid-cols-5 gap-x-6 gap-y-2">
        {items.map((item) => (
          <NavLink className="bg-footer p-4 rounded group" key={item.id} to="/">
            <div className="relative mb-4">
              <img src={item.image} className={`aspect-square ${imageStyle(item)}`} />
                <button className="w-10 h-10 rounded-full bg-primary absolute bottom-2 right-2 items-center 
                                    justify-center group-hover:flex group-focus:flex hidden">
                  <Icon name="play" size="26"></Icon>
                </button>
            </div>
            <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap font-semibold pt-1">
              {item.title}
            </h6>
            <div className="flex items-center">
              <p className="line-clamp-2 text-link text-sm mt-1">
                {item.description}
              </p>
            </div>
          </NavLink>
        ))}
      </div>
    </section>
  );
}

export default Section;
