import Head  from "next/head";

//javascript içinde style belirlemek için jsx attribute sahip bir style yazabiliriz

export default function About(){
    return (
        <>
        <Head>
            <title>About Page</title>
        </Head>
        
        <div>
                <h1 className="greenColor">About</h1>
               <span className="redColor"> Lorem ipsum dolar</span>
        </div>
        
        <style jsx>
                {`
                .greenColor {
                    color: green;                
                }

                .redColor {
                    color: red;
                }
                `}
        </style>
        
        </>
    )
}