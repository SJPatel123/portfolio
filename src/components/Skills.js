import React, { useRef, useEffect, useState } from 'react'
import './skills.css'

export default function Skills(props) {
    const progressRef = useRef(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0
        };

        const intervalId = setInterval(() => {
            setProgress((prevProgress) => {
                const newProgress = prevProgress + 1;
                if (newProgress >= props.value) {
                    clearInterval(intervalId);
                }
                return newProgress;
            });
        }, 50);

        const callback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Increase progress value to 80%
                    let degree = (360 * props.value) / 100;
                    progressRef.current.style.background = `conic-gradient(#0ef ${degree}deg, #ededed 0deg)`;
                    progressRef.current.querySelector('.progress-value').textContent = `${props.value}%`;

                    // Unobserve the target element
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);

        if (progressRef.current) {
            observer.observe(progressRef.current);
        }

        return () => {
            if (progressRef.current) {
                observer.unobserve(progressRef.current);
            }
            clearInterval(intervalId);
        };
    }, []);
    return (
        <>
            <div className="skills-main">
                <div className="skills">
                    <div className="container">
                        <div className="circular-progress" style={{ background: `conic-gradient(#0ef ${progress}%, #ededed 0deg)` }}>
                            <span className="progress-value">{progress}%</span>
                        </div>
                        <span className="text">{props.skillName}</span>
                    </div>
                </div>
            </div>
        </>
    )
}
