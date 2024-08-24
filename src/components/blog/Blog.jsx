import React from "react";
import "./blog.css";
import Image1 from "../../assets/blog1.jpg";
import Image2 from "../../assets/blog-2.svg";
const Blog = ()=> {
    return (
        <section className="blog container section" id="blog">
            <h2 className="section__title">Lastest Posts</h2>

            <div className="blog__container grid">
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="#"><span className="blog__category">AI</span></a>
                        <img src={Image1} alt=""  className="blog__img"/>
                    </div>
                    <div className="blog__details">
                        <a href="https://www.linkedin.com/posts/mestaysserasma_ai-innovation-autonomoussystems-activity-7232625793879670784-r2e5?utm_source=share&utm_medium=member_desktop"><h3 className="blog__title">Can Machines Think and Act in Non-Human Ways? 🚀</h3>
                        </a>
                        <div className="blog__meta">
                            <span>23 August, 2024</span>
                            <span className="blog__dot">.</span>
                            <span>Mestaysser Asma</span>
                        </div>
        
                    </div>
                </div>

                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="#"><span className="blog__category">AI</span></a>
                        <a href="#"><img src={Image2} alt=""  className="blog__img"/></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Roadmap pour Devenir Ingénieur en IA</h3>
                        <div className="blog__meta">
                            <span>06 December, 2023</span>
                            <span className="blog__dot">.</span>
                            <span>Mestaysser Asma</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Blog