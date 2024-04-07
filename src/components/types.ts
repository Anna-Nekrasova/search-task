export type UserType = {
    id: number;
    firstName: string;
    lastName: string;
    address: {
        city: string
    }
    image: string;
}

export type SearchContextType = {
    users: UserType[];
    getDataUsers: (query: string) => void;
    isLoading: boolean;
    isError: boolean;
}