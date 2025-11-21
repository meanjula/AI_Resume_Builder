import React from "react";
import { PlusSquare } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useState } from "react";
import { Button} from "@/components/ui/button";
import { Input } from "@/components/ui/input";


function AddResume() {
    const [openDialog, setOpenDaialog] = useState(false)
    const openDialogOnClick = () => setOpenDaialog(true)
    const closeDialogOnClick = () => setOpenDaialog(false)
    
  return (
    <div>
      <div className="flex justify-center items-center bg-secondary
       p-14 border rounded-lg h-[280px] hover:scale-105 transition-all
       hover:shadow-md cursor-pointer"
       onClick={openDialogOnClick}
       >
        <PlusSquare />
      </div>
      <Dialog open= {openDialog}>      
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
                <p>Add title for your resume</p>
                <Input name="name" placeholder="Ex.Full stack resume" className='my-2'/>
            </DialogDescription>
            <div className="flex gap-2 justify-end">
                <Button onClick={closeDialogOnClick} variant="ghost">Cancel</Button>
                <Button>Create</Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddResume;
