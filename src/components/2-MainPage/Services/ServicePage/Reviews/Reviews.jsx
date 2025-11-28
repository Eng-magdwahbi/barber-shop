import { useState } from "react";
import "./reviews.css";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Rating,
  CircularProgress,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import emailjs from "@emailjs/browser";

export default function Reviews({ open, onClose }) {
  const [rating, setRating] = useState(0);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const temp = {};
    if (!rating) temp.rating = "Rating required";
    if (!fullName.trim()) temp.fullName = "Full name is required";
    if (!email.trim()) temp.email = "Email is required";
    if (!review.trim()) temp.review = "Review is required";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    setLoading(true);

    const templateParams = {
      fullName,
      email,
      rating,
      review,
    };

    emailjs
      .send(
        "service_927oztj",
        "template_cmxf9dr",
        templateParams,
        "qb329xjlM0fXYyvIf"
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);

        setTimeout(() => {
          setSuccess(false);
          onClose();
        }, 1500);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setLoading(false);
      });
  };

  return (
    <Dialog open={open} onClose={onClose} className="review-modal">
      <DialogTitle className="modal-title">
        Write a review
        <IconButton className="close-btn" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent className="modal-body">
        {success ? (
          <p className="success-message">Success ✔</p>
        ) : (
          <>
            <p>Your rating *</p>
            <Rating value={rating} onChange={(e, val) => setRating(val)} />
            {errors.rating && <span className="error">{errors.rating}</span>}

            <TextField
              label="Full Name *"
              fullWidth
              margin="normal"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              error={Boolean(errors.fullName)}
              helperText={errors.fullName}
            />

            <TextField
              label="Email *"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={Boolean(errors.email)}
              helperText={errors.email}
            />

            <TextField
              label="Review *"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              value={review}
              onChange={(e) => setReview(e.target.value)}
              error={Boolean(errors.review)}
              helperText={errors.review}
            />
          </>
        )}
      </DialogContent>

      {!success && (
        <DialogActions>
          <Button
            style={{ backgroundColor: "black", borderRadius: "12px" }}
            variant="contained"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : "Submit"}
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
}
