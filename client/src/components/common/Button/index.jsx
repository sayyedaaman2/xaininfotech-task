import './styles.css'
function Button(
    {
        children,
        size="small",
        backgroundColor,
        color='black',
        borderColor,
        href="",
        onClickFn = ()=>{}
    } 
){
    function onClickHandle(e){
        onClickFn(e)
    }
  
function getStyleClasses(style) {
    let classString = [];
    let sizes = {
        large: 'large-btn',
        small: 'small-btn',
    };
    let colors = {
        black: 'text-neutral-900',
        white: 'text-neutral-100',
        yellow: 'text-yellow-400',
        blue: 'text-blue-400',
    };
    let backgroundColors = {
        black: 'bg-neutral-900',
        white: 'bg-neutral-100',
        yellow: 'bg-yellow-400',
        blue: 'bg-blue-400',
    };
    let borderColors = {
        black: 'border-neutral-900',
        white: 'border-neutral-100',
        yellow: 'border-yellow-400',
        blue: 'border-blue-400',
    };

    if (style.borderColor && borderColors[style.borderColor]) {
        classString.push(borderColors[style.borderColor]);
    }

    if (style.size && sizes[style.size]) {
        classString.push(sizes[style.size]);
    }
    if (style.color && colors[style.color]) {
        classString.push(colors[style.color]);
    }
    if (style.backgroundColor && backgroundColors[style.backgroundColor]) {
        classString.push(backgroundColors[style.backgroundColor]);
    }

    return classString.join(' ');
}

const styleClasses = getStyleClasses({ size, color, backgroundColor,borderColor });
    return (
        <>
        {href ? (<a href={href}  className={`primary-btn ${styleClasses}`} onClick={onClickHandle}>
            {children}
        </a>) : (<button className={`primary-btn ${styleClasses}`} onClick={onClickHandle}>
            {children}
        </button>)}
        </>
    )
}

export default Button