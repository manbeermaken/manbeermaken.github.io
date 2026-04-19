import { useRef, useEffect } from 'react';
import { Engine, Body, Bodies, Composite, Render, Runner, Mouse, MouseConstraint } from "matter-js"

const Hero = () => {
  const bodyRef = useRef<HTMLDivElement>(null)
  const engineRef = useRef<Engine>(Engine.create())

  useEffect(() => {
    if (!bodyRef.current) return;
    const render = Render.create({
      element: bodyRef.current,
      engine: engineRef.current,
      options: {
        width: 400,
        height: 400,
        wireframes: false,
        background: "transparent"
      }
    })

    Render.run(render);

    const runner = Runner.create();
    Runner.run(runner, engineRef.current);

    const box = Bodies.rectangle(100, 100, 50, 50, {
      render: {
        fillStyle: "#FF3366",
      }
    });
    const circle = Bodies.circle(130, 0, 30);
    const polygon = Bodies.polygon(200, 100, 6, 40);

    Body.setAngularVelocity(box, 0.2);
    Body.setAngularVelocity(polygon, 0.1);
    const ground = Bodies.rectangle(0, 400, 800, 5, { isStatic: true });
    const roof = Bodies.rectangle(0, 0, 800, 5, { isStatic: true });
    const leftWall = Bodies.rectangle(0, 0, 5, 800, { isStatic: true });
    const rightWall = Bodies.rectangle(400, 0, 5, 800, { isStatic: true });


    Composite.add(engineRef.current.world, [box, circle, polygon, ground, roof, leftWall, rightWall]);

    const mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engineRef.current, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        }
      });

    Composite.add(engineRef.current.world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;
    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Composite.clear(engineRef.current.world, false);
      Engine.clear(engineRef.current);
      render.canvas.remove();
      render.textures = {};
    };
  }, [])

  return (
    <section className="flex h-full shrink-0 items-center justify-center p-4 md:h-auto md:flex-1 md:overflow-y-auto">
      <div ref={bodyRef} className=''>
      </div>
    </section>
  );
};

export default Hero;
