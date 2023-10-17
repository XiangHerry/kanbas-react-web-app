import './index.css';

function Classes() {
    // 基于 color 常量动态创建的类
    const color = 'blue';

    // 根据 dangerous 常量决定的背景颜色，如果为 true 则为红色，否则为绿色
    const dangerous = true;

    return (
        <div>
            <h2>Classes</h2>

            <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>
                Dynamic Blue background
            </div>

            <div className={`${dangerous ? 'wd-bg-red' : 'wd-bg-green'} wd-fg-black wd-padding-10px`}>
                Dangerous background
            </div>
        </div>
    );
};

export default Classes;

   