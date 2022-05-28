import { useEffect, useState } from "react";

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://dry-forest-04223.herokuapp.com/admin/${email}`)
                .then((res) => res.json())
                .then((data) => {
                    setAdmin(data.admin);
                    setAdminLoading(false);
                });
        }
    }, [user]);
    return [admin, adminLoading];
};
export default useAdmin;
