import Link from 'next/link'

const fourOfour = ()=>{
    return(
        <div className="error">
            <div>Sorry the page you are seeking doesn&apos;t exist</div>
            <Link href="/"><a>Return to Home Page</a></Link>
        </div>
    )
}

export default fourOfour;