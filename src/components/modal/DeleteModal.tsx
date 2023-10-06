import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import "./Modals.scss";
type Props = {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  deletePost: any;
  postInfo: any;
};

const overlayVariants = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      duration: 0.3,
      delayChildren: 0.4,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      duration: 0.3,
      delay: 0.4,
    },
  },
};
const DeleteModal: FC<Props> = (props) => {
  return (
    <>
      {" "}
      <AnimatePresence>
        {props.openModal ? (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            className="delete_modal-background"
          >
            <motion.div
             initial={{ y: "100vh" }}
             animate={{ y: 0 }}
             exit={{ y: "100vh" }}
              transition={{ duration: 0.5 }}
              className="delete_modal-container"
            >
              <h5>Are you sure you want to delete this post? </h5>
              <div>
                <button type="button" onClick={() => props.setOpenModal(false)}>
                  {" "}
                  close{" "}
                </button>

                <button onClick={() => props.deletePost(props.postInfo._id)}>
                  Delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
    </>
  );
};

export default DeleteModal;
