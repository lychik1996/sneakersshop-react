import "../styles/global.scss"
import Head from "next/head"
import Card from "@/components/card"
import Header from "@/components/Header"
import Overlay from "@/components/Overlay"
export default function App(){
    
    return(
        
        <div onDragStart={(e)=>e.preventDefault()}>
        <Head>
            <title> sneakers-shop</title>
        </Head>
        <div className="wrapper">
            <Overlay/>
            <Header/>         
            <div className="slider"></div>
            <div className="contant">
                <div className="contant_top">
                    <h3 className="contant_top-info">All sneakers</h3>
                    <input type="search" className="contant_top-searc" placeholder="Search..."/>
                </div>
                
                <ul className="contant_items">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </ul>
            </div>
        </div>
        </div>
         
    )
}