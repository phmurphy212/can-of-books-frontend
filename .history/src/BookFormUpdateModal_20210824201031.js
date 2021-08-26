// import React from 'react';
// import { Form, Button, Modal } from 'react-bootstrap';
// import { withAuth0 } from '@auth0/auth0-react';


// class BookFormUpdateModal extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       books: [],
//       showModal: false,
//     }
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     let title = e.target.title.value;
//     let description = e.target.description.value;
//     let email = this.props.email;
//     let status = e.target.status.value;
  
//     this.props.handleCreate({ title, status, description, email });
//     this.props.hideModal();
//   }


//   render() {
//     return (
//       <>
//         <Modal show={this.props.showModal} onHide={this.props.hideModal}>
//           <Modal.Dialog>
//             <Modal.Header closeButton>
//               <Modal.Title>Add a Book</Modal.Title>
//             </Modal.Header>

//             <Modal.Body>
//               <Form onSubmit={this.handleSubmit}>
//                 <Form.Group controlId="title">
//                   <Form.Label>Book Title</Form.Label>
//                   <Form.Control type="text" />
//                 </Form.Group>

//                 <Form.Group controlId="description">
//                   <Form.Label>Book Description</Form.Label>
//                   <Form.Control type="text" />
//                 </Form.Group>
                
//                 <Form.Group controlId="status">
//                   <Form.Label>Book Status</Form.Label>
//                   <Form.Control as="select" controlId="status">
//                     <option>Life Changining</option>
//                     <option>Five Favorite</option>
//                     <option>Recommended To Me</option>
//                   </Form.Control>
//                 </Form.Group>
//                 <Button type="submit">
//                   Update Book
//                 </Button>
//               </Form>
//             </Modal.Body>
//             <Modal.Footer>
//               <Button onClick={this.props.hideModal}>
//                 Close
//           </Button>
//             </Modal.Footer>
//           </Modal.Dialog>
//         </Modal>
//       </>

//     );
//   }
// }
// export default withAuth0(BookFormUpdateModal);
