// import React, { useState } from "react";
// import axios from "axios";

// const Admin = ({ cookies }) => {
//     const [title, setTitle] = useState("");
//     const [content, setContent] = useState("");

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post(
//                 "http://localhost:8000/api/articles",
//                 {
//                     title,
//                     content,
//                 },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${cookies.mycookie.token}`,
//                     },
//                 }
//             );
//             alert("Article créé avec succès !");
//             setTitle("");
//             setContent("");
//         } catch (error) {
//             console.error("Failed to create article", error);
//             alert("Erreur lors de la création de l'article.");
//         }
//     };

//     return (
//         <div>
//             <h1>Panneau d'administration</h1>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Titre :</label>
//                     <input
//                         type="text"
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Contenu :</label>
//                     <textarea
//                         value={content}
//                         onChange={(e) => setContent(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <button type="submit">Créer l'article</button>
//             </form>
//         </div>
//     );
// };

// export default Admin;
