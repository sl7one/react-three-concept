import React, { useContext, useRef } from "react";
import { GlobalContext } from "../context/context";
import gsap from "gsap";
import { front } from "../helpers/gsap";

export default function Actions({ active, setActive }) {
  const refs = useRef([]);

  const { setData } = useContext(GlobalContext);

  const onClick = (idx) => {
    setActive(idx);
    setData((prev) => {
      switch (idx) {
        case 0: {
          prev.camera.position.x = 0;
          prev.camera.position.y = 0;
          prev.camera.position.z = 1.9;

          prev.mesh.position.x = 4;
          prev.mesh.position.y = 0;
          prev.mesh.position.z = 0;

          prev.mesh.rotation.x = 0;
          prev.mesh.rotation.y = Math.PI / 5;
          prev.mesh.rotation.z = 0;
          gsap.to(".text", front.toLeft);

          break;
        }
        case 1: {
          prev.camera.position.y = 1.5;
          prev.mesh.position.y = -1;
          prev.mesh.position.x = 4;
          prev.mesh.rotation.z = 1.25;
          prev.camera.position.z = 4;

          gsap.to(".text", front.toLeft);

          break;
        }
        case 2: {
          prev.mesh.position.y = -1;
          prev.mesh.rotation.z = 1.8;
          prev.camera.position.y = 2;
          prev.mesh.position.x = -6;
          prev.camera.position.z = 3;

          gsap.to(".text", front.toRight);
          break;
        }
        case 3: {
          prev.mesh.rotation.z = 2.4;
          prev.camera.position.y = -1;
          prev.mesh.position.x = 4;
          prev.camera.position.z = 5;

          gsap.to(".text", front.toLeft);

          break;
        }
        case 4: {
          prev.mesh.position.y = 0;
          prev.mesh.rotation.z = 0.5;
          prev.camera.position.y = -1;
          prev.mesh.position.x = 4;
          prev.camera.position.z = 7;

          gsap.to(".text", front.toLeft);

          break;
        }
        case 5: {
          prev.mesh.position.y = 0;
          prev.mesh.rotation.z = 1;
          prev.camera.position.y = 0;
          prev.mesh.position.x = -2;
          prev.camera.position.z = 7;
          gsap.to(".text", front.toRight);

          break;
        }
        default: {
          throw new Error("Case unsupported");
        }
      }
      return { ...prev };
    });
  };
  const items = [
    {
      title: "BUTTON",
      onClick,
    },
    {
      title: "BUTTON",
      onClick,
    },
    {
      title: "BUTTON",
      onClick,
    },
    {
      title: "BUTTON",
      onClick,
    },
    {
      title: "BUTTON",
      onClick,
    },
    {
      title: "BUTTON",
      onClick,
    },
  ];

  return (
    <ul className="actions">
      {items.map(
        ({ title,  onClick, ...props }, idx) => (
          <li
            ref={(el) => refs.current.push(el)}
            key={idx}
            className={active === idx ? "active" : null}
          >
            <button
              key={idx}
              type="button"
              onClick={() => onClick(idx)}
              {...props}
            >
              {title}
            </button>
          </li>
        )
      )}
    </ul>
  );
}
