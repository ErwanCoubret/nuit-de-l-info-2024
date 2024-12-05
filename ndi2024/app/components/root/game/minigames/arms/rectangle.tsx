const Rectangle = ({ content, image, className = "" }: { content: string, image? : string, className?: string }) => {

    return (
    <div className={`w-36 h-11 text-xl py-2 px-4 bg-white rounded-lg flex items-center ${className}`}>
        {image && <img className="w-8 h-8 mr-2" src={image} alt="Image" />}
        {content}
    </div>
    )
}

export default Rectangle 