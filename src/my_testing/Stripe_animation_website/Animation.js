import styles from './Animation.module.css';
import { useEffect, useRef } from 'react';



const Animation = () => {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const col = (x, y, r, g, b) => {
            ctx.fillStyle = `rgb(${r},${g},${b})`;
            ctx.fillRect(x, y, 1, 1);
        };

        const R = (x, y, t) => Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t));
        const G = (x, y, t) => Math.floor(192 + 64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300));
        const B = (x, y, t) => Math.floor(192 + 64 * Math.sin(5 * Math.sin(t / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100));

        let t = 0;

        const run = () => {
            for (let x = 0; x <= 35; x++) {
                for (let y = 0; y <= 35; y++) {
                    col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
                }
            }
            t = t + 0.05;
            window.requestAnimationFrame(run);
        };

        run();
    }, []);

    return (
        <>
            <canvas ref={canvasRef} width="36" height="36" className={styles.canvas}></canvas>
            <div className={styles.text}>
                <div className={styles.my_text}>Payments</div>
                <div className={styles.my_text}>Infrastructure</div>
                <div className={styles.my_text}>For The Internet</div>
            </div>
        </>
    );
};


export default Animation;
