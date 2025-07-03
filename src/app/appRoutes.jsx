// Provider & Layout Import 
import RouteGuard from "../global/RouteGuard";
import AppLayout from "./AppLayout";

// Component Imports

// App Routes
export const appRoutes = [
    { 
        path:'',
        element: <AppLayout />,
        children: [
            { index:true, element:<h1>Home Page: INDEX TRUE</h1> },
            {
                path:'test',
                element:(
                    <RouteGuard 
                        allowedRoles={["admin"]}
                        children={<h1>Testing Page</h1>}
                    />
                ) 
            }
        ]
    },
]
