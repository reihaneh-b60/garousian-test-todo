export async function fetchTodoList (){
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/todo`);
    const data = await response.json();
    return data.map((item:any) => ({...item , id : +item.id}));
};