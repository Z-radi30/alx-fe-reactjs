function UserProfile() {
    return (
        <div className="p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-xs md:max-w-sm mx-auto">
        <img 
            src="https://via.placeholder.com/150"
            alt="User"
            className="w-24 h-24 sm:w-36 sm:h-36 rounded-full mx-auto mb-4"
        />
         <h1 className="text-lg sm:text-xl font-bold text-center">John Doe</h1>
         <p className="mt-2 text-sm sm:text-base text-gray-600 text-center">
            Developer at Example Co. Loves to write code and explore new technologies.
         </p>
      </div>
    );
  }
  
  export default UserProfile;