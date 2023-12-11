import React from 'react';

export default function Section3ComponentChild() {


    return (
        <div className='container'>
            <div className="left">
                <img src="./images/main/section3/sec3_1.jpeg" alt="" />
            </div>
            <div className="right">
                <div className="text-box">
                    <h2>HT101 2023 FW</h2>
                    <p>
						COZY ACTIVE,<br/>
						휴식과 웰빙이 강조되는 컨셉으로 <br/>
						소재와 실루엣, 자연에 초점을 맞춘 아트워크로 <br/>
                        치유적 특성을 강조한 HT101 2023 FW
					</p>
                    <div className="button">
                        <a href="#">자세히 보기</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
