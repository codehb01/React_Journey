import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="bg-white py-16">
      <div className="h-96 text-gray-900 text-center">
       

        <h1>Add your name in url to greet yourself</h1>
        <h1 className="font-bold text-5xl mt-4">Hello {userid}</h1>

        <h1 className="font-bold text-5xl mt-4">नमस्ते {userid}</h1>
        <h1 className="font-bold text-5xl mt-4"> Hola {userid}</h1>
      </div>
    </div>
  );
}

export default User;
