import AddNewTodoForm from "@/components/homePage/addNewTodoForm";
import TodoList from "@/components/homePage/todoList";
import PageStatusHandler from "@/components/layout/pageStatusHandler";
import { Itodo } from "@/interface/todo";
import { fetchTodoList } from "@/services/homepageServices";

export default async function Home() {

  const todos : Itodo[] = await fetchTodoList()

  return (
   <>
    <PageStatusHandler/>
    <main className="w-full bg-garousian-white flex items-center justify-center">
      <div className="w-full max-w-[480px] py-[40px] md:py-[100px] px-[24px] md:px-0">
        <div className="w-full flex flex-col gap-[30px] md:gap-[50px]">
          
          <div className="w-full flex flex-col gap-[24px] md:gap-[50px]">
            <AddNewTodoForm/>
            <TodoList todos={todos}/>
          </div>
        </div>
      </div>
    </main>
   </>
  );
}
