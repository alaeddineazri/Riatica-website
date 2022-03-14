import React from 'react'
import  './workPlan.css'
import Zoom from 'react-reveal/Zoom';

const WorkPlan = () => {
  return (
    <section className="section-WorkPlan my-5">
      
    <div className="container">
      <div className="row justify-content-center justify-content-md-start">
        <div className="col-sm-9 col-lg-7 col-xl-5">
          <div className="text-center text-md-left ">
            <div className="my-2 display-3 " >
            <Zoom><h2  className="display-4 ">Notre stratégie</h2></Zoom>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-30 justify-content-center align-items-md-center m-3">
        <div className="col-md-5 col-lg-4 text-center">
          <div >
            <div  ><Zoom><img className="w-100" src="images/home__section__4.png" alt=""  /></Zoom>
            </div>
          </div>
        </div>
        <div className="col-md-7 col-lg-6">
          <div  >
          <Zoom>
            <div className=" d-flex flex-column flex-sm-row  align-items-center justify-content-center my-5 ">
              <div  className=" m-3 " >
                <div className="box-numeric-num"><span>01</span></div>
              </div>
              <div className="p-2">
                <h4>Première recontre avec le client</h4>
                <p>La première réunion est très importante pour faire connaissance et discuter des principales idées
                  du projet.</p>
              </div>
            </div>
            </Zoom>
          </div>
          <div className=" arrow-block d-none d-lg-block arrow-1  " ><Zoom><img src="images/home__section__arrow__1.png"
              alt="" className="w-100" /></Zoom>
          </div>
        </div>
      </div>
      <div className="row row-30 align-items-md-center justify-content-md-end">
        <div className="col-md-5 col-lg-4 order-md-2 text-center">
          <div  >
            <div className="wow slideInRight" data-wow-delay="0.6s"><Zoom><img className="w-100" src="images/home__section__5.png" alt=""
                 /></Zoom>
            </div>
          </div>
        </div>

        <div className="col-md-7 col-lg-6 col-xl-5 order-md-1">
        <Zoom>
          <div  data-wow-delay="0.8s">
            <div className=" d-flex flex-column flex-sm-row  align-items-center justify-content-center my-5 ">
              <div className=" m-3 ">
                <div className="box-numeric-num"><span>02</span></div>
              </div>
              <div className="unit-body">
                <h4>Considération Et Analyse Du Plan Du Travail</h4>
                <p>Lorsqu'on comprent les idées principales, on discuttent le plan de travail.</p>
              </div>
            </div>
          </div>
          </Zoom>
          <div className="arrow-block d-none d-lg-block arrow-2 wow fadeIn" data-wow-delay="0.9s"><Zoom><img className="w-100" src="images/home__section__arrow__2.png"
              alt=""  /></Zoom>
          </div>
        </div>
      </div>
      <div className="row row-30 justify-content-center align-items-md-center">
        <div className="col-md-5 col-lg-5 text-center">
          <div  >
            <div className="wow slideInLeft" data-wow-delay="1s"><Zoom><img className="w-100" src="images/home__section__6.png" alt=""  /></Zoom>
            </div>
          </div>
        </div>
        <div className="col-md-7 col-lg-6">
          <div  data-wow-delay="1.2s">
          <Zoom>
            <div className=" d-flex flex-column flex-sm-row align-items-center ">
              <div className=" m-3 ">
                <div className="box-numeric-num"><span>03</span></div>
              </div>
              <div className="unit-body">
                <h4>La Partie Developpement</h4>
                <p>Notre équipe commence à travailler sur votre projet et incarne tous les détails du concept initial.
                </p>
              </div>
            </div>
            </Zoom>
          </div>
          <div className="arrow-block d-none d-lg-block arrow-3 wow fadeIn" data-wow-delay="1.3s"><Zoom><img className="w-100" src="images/home__section__arrow__3.png"
              alt=""  /></Zoom>
          </div>
        </div>
      </div>
      <div className="row row-30 justify-content-md-end align-items-md-center">
        <div className="col-md-5 col-lg-4 order-md-2 text-center">
          <div  >
            <div className="wow slideInRight" data-wow-delay="1.5s"><Zoom><img className="w-100" src="images/home__section__7.png" alt="" /></Zoom>
            </div>
          </div>
        </div>
        <div className="col-md-7 col-lg-6 order-md-1">
          <div  data-wow-delay="1.6s">
          <Zoom>
            <div className=" d-flex flex-column flex-sm-row align-items-center ">
              <div className=" m-3 ">
                <div className="box-numeric-num"><span>04</span></div>
              </div>
              <div className="unit-body">
                <h4>Analyse Et Vérification</h4>
                <p>Nous rencontrons, analysons et vérifions le travail que nous avons effectué sur le projet et
                  apportons les modifications nécessaires.</p>
              </div>
            </div>
            </Zoom>
          </div>
          <div className="arrow-block d-none d-lg-block arrow-4 wow fadeIn" data-wow-delay="1.7s"><Zoom><img src="images/home__section__arrow__4.png"
              alt=""  /></Zoom>
          </div>
        </div>
      </div>
      <div className="row row-30 justify-content-center">
        <div className="col-md-5 col-lg-4 text-center">
          <div  >
            <div className="wow slideInLeft" data-wow-delay="1.8s"><Zoom><img  className="w-100" src="images/home__section__8.png" alt=""  /></Zoom>
            </div>
          </div>
        </div>
        <div className="col-md-7 col-lg-6">
          <div  data-wow-delay="1.9s">
          <Zoom>
            <div className=" d-flex flex-column flex-sm-row align-items-center ">
              <div className=" m-3 ">
                <div className="box-numeric-num"><span>05</span></div>
              </div >
              <div className="unit-body">
                <h4>finalisation et livraison du projet</h4>
                <p>Le projet est terminé et nous le remettons à notre client. Nous demandons également les
                  commentaires des clients.</p>
              </div>
            </div>
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default WorkPlan