// import React from "react";
// import './Testimonial.css'
// import {MDBCard,MDBCardBody,MDBCarousel,MDBCarouselInner,MDBCarouselItem,MDBCol,MDBContainer,MDBIcon,MDBRow,} from "mdb-react-ui-kit";

// export default function App() {
//   return (
//     <MDBContainer fluid className="py-5 gradient-custom">
//       <MDBRow className="d-flex justify-content-center">
//         <MDBCol md="12">
//           <div className="text-center mb-4 pb-2">
//             <MDBIcon fas icon="quote-left" size="3x" className="text-white" />
//           </div>
//           <MDBCard>
//             <MDBCardBody className="px-4 py-5">
//               <MDBCarousel showIndicators showControls dark>
//                 <MDBCarouselInner>
//                   <MDBCarouselItem className="active">
//                     <MDBRow className="d-flex justify-content-center">
//                       <MDBCol lg="10" xl="8">
//                         <MDBRow>
//                           <MDBCol
//                             lg="4"
//                             className="d-flex justify-content-center"
//                           >
//                             <img
//                               src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
//                               className="rounded-circle shadow-1 mb-4 mb-lg-0"
//                               alt="woman avatar"
//                               width="150"
//                               height="150"
//                             />
//                           </MDBCol>
//                           <MDBCol
//                             md="9"
//                             lg="7"
//                             xl="8"
//                             className="text-center text-lg-start mx-auto mx-lg-0"
//                           >
//                             <h4 className="mb-4">
//                               Maria Smantha - Web Developer
//                             </h4>
//                             <p className="mb-0 pb-3">
//                               Lorem ipsum dolor sit amet, consectetur
//                               adipisicing elit. A aliquam amet animi blanditiis
//                               consequatur debitis dicta distinctio, enim error
//                               eum iste libero modi nam natus perferendis
//                               possimus quasi sint sit tempora voluptatem. Est,
//                               exercitationem id ipsa ipsum laboriosam
//                               perferendis.
//                             </p>
//                           </MDBCol>
//                         </MDBRow>
//                       </MDBCol>
//                     </MDBRow>
//                   </MDBCarouselItem>
//                   <MDBCarouselItem>
//                     <MDBRow className="d-flex justify-content-center">
//                       <MDBCol lg="10" xl="8">
//                         <MDBRow>
//                           <MDBCol
//                             lg="4"
//                             className="d-flex justify-content-center"
//                           >
//                             <img
//                               src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
//                               className="rounded-circle shadow-1 mb-4 mb-lg-0"
//                               alt="woman avatar"
//                               width="150"
//                               height="150"
//                             />
//                           </MDBCol>
//                           <MDBCol
//                             md="9"
//                             lg="7"
//                             xl="8"
//                             className="text-center text-lg-start mx-auto mx-lg-0"
//                           >
//                             <h4 className="mb-4">
//                               Lisa Cudrow - Graphic Designer
//                             </h4>
//                             <p className="mb-0 pb-3">
//                               Sed ut perspiciatis unde omnis iste natus error
//                               sit voluptatem accusantium doloremque laudantium,
//                               totam rem aperiam, eaque ipsa quae ab illo
//                               inventore veritatis et quasi architecto beatae
//                               vitae dicta sunt explicabo. Nemo enim ipsam
//                               voluptatem quia voluptas sit aspernatur.
//                             </p>
//                           </MDBCol>
//                         </MDBRow>
//                       </MDBCol>
//                     </MDBRow>
//                   </MDBCarouselItem>
//                   <MDBCarouselItem>
//                     <MDBRow className="d-flex justify-content-center">
//                       <MDBCol lg="10" xl="8">
//                         <MDBRow>
//                           <MDBCol
//                             lg="4"
//                             className="d-flex justify-content-center"
//                           >
//                             <img
//                               src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp"
//                               className="rounded-circle shadow-1 mb-4 mb-lg-0"
//                               alt="woman avatar"
//                               width="150"
//                               height="150"
//                             />
//                           </MDBCol>
//                           <MDBCol
//                             md="9"
//                             lg="7"
//                             xl="8"
//                             className="text-center text-lg-start mx-auto mx-lg-0"
//                           >
//                             <h4 className="mb-4">
//                               John Smith - Marketing Specialist
//                             </h4>
//                             <p className="mb-0 pb-3">
//                               At vero eos et accusamus et iusto odio dignissimos
//                               qui blanditiis praesentium voluptatum deleniti
//                               atque corrupti quos dolores et quas molestias
//                               excepturi sint occaecati cupiditate non provident,
//                               similique sunt in culpa qui officia mollitia animi
//                               id laborum et dolorum fuga.
//                             </p>
//                           </MDBCol>
//                         </MDBRow>
//                       </MDBCol>
//                     </MDBRow>
//                   </MDBCarouselItem>
//                 </MDBCarouselInner>
//               </MDBCarousel>
//             </MDBCardBody>
//           </MDBCard>
//           <div className="text-center mt-4 pt-2">
//             <MDBIcon fas icon="quote-right" size="3x" className="text-white" />
//           </div>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// }
import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBContainer className="py-5 mb-4">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" xl="8" className="text-center">
          <h3 className="mb-4">Testimonials</h3>
          <p className="mb-4 pb-2 mb-md-5 pb-md-0">
            Some of Our Customers Review.
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow className="text-center d-flex align-items-stretch">
        <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
          <MDBCard className="testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "#9d789b" }}
            ></div>
            <div className="avatar mx-auto bg-white">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                className="rounded-circle img-fluid mt-4"
                alt=""
              />
            </div>
            <MDBCardBody>
              <h4 className="mb-4">Maria Smantha</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                "The SignAll system has truly changed the way I communicate.
                Highly recommend it!"
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
          <MDBCard className="testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "#7a81a8" }}
            ></div>
            <div className="avatar mx-auto bg-white">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                className="rounded-circle img-fluid mt-4"
                alt=""
              />
            </div>
            <MDBCardBody>
              <h4 className="mb-4">Lisa Cudrow</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                "Hand Talk is an amazing tool. It makes interactions so much
                easier and more natural."
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
          <MDBCard className="testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "#6d5b98" }}
            ></div>
            <div className="avatar mx-auto bg-white">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                className="rounded-circle img-fluid mt-4"
                alt=""
              />
            </div>
            <MDBCardBody>
              <h4 className="mb-4">John Smith</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                "I used to struggle with communication at work, but with
                Talking Hand, everything has changed. The system is
                incredibly accurate and easy to use. My colleagues are amazed at
                how smoothly our interactions go now."
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}