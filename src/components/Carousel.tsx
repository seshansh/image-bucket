import { useState, useEffect } from "react";
import {
  Theme,
  IconButton,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import { makeStyles } from "tss-react/mui";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import "./Carousel.css";
interface ImageProps {
  src: string;
  alt: string;
  thumbnail: string;
  details: string;
}

interface CarouselProps {
  images: ImageProps[];
}

const useStyles = makeStyles()((theme: Theme) => {
  return {
    root: {
      width: "100%",
      margin: "0 auto",
      position: "relative",
      boxShadow: "none",
    },
    media: {
      aspectRatio: "2/1.15",
      borderRadius: 25,
    },
    details: {
      position: "absolute",
      bottom: 0,
      width: "100%",
      backgroundColor: "rgba(0,0,0,0.6)",
      color: "#fff",
      padding: theme.spacing(1),
      fontSize: 16,
      fontWeight: 600,
    },
    thumbnail: {
      width: 160,
      height: 120,
      objectFit: "cover",
      borderRadius: 10,
      margin: theme.spacing(1),
      cursor: "pointer",
      filter: "grayscale(100%)",
      "&.active": {
        filter: "none",
      },
    },
    controls: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: theme.spacing(1),
    },
  };
});

const Carousel = ({ images }: CarouselProps) => {
  const { classes } = useStyles();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentImage, setCurrentImage] = useState<ImageProps>(images[0]);

  useEffect(() => {
    let intervalId: number;
    if (isPlaying) {
      intervalId = window.setInterval(() => {
        setCurrentImageIndex((currentImageIndex) =>
          currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
        );
      }, 3000);
    }
    setCurrentImage(images[currentImageIndex]);
    return () => window.clearInterval(intervalId);
  }, [isPlaying, currentImageIndex, images]);

  const goToNextSlide = () => {
    setCurrentImageIndex((currentImageIndex) =>
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  const goToPreviousSlide = () => {
    setCurrentImageIndex((currentImageIndex) =>
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying((isPlaying) => !isPlaying);
  };

  return (
    <div className="container">
      <div style={{ flex: 0.6, padding: 5 }}>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={images[currentImageIndex].src}
            title={images[currentImageIndex].alt}
          />
          <Grid container justifyContent="center">
            <CardContent className={classes.controls}>
              <IconButton sx={{ color: "#000" }} onClick={goToPreviousSlide}>
                <ArrowLeftIcon sx={{ fontSize: 50 }} />
              </IconButton>
            </CardContent>
            {images.map((image, index) => (
              <img
                key={index}
                className={`${classes.thumbnail} ${
                  currentImageIndex === index ? "active" : ""
                }`}
                src={image.thumbnail}
                alt={image.alt}
                onClick={() => goToSlide(index)}
              />
            ))}
            <CardContent className={classes.controls}>
              <IconButton sx={{ color: "#000000" }} onClick={goToNextSlide}>
                <ArrowRightIcon sx={{ fontSize: 50 }} />
              </IconButton>
            </CardContent>
          </Grid>
        </Card>
      </div>
      <div
        style={{
          flex: 0.4,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ flex: 0.8, paddingInline: "10%" }}>
          <h1 style={{ marginBottom: 30 }}>{currentImage.alt}</h1>
          <p>{currentImage.details}</p>
        </div>
        <div
          style={{
            flex: 0.2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 50,
          }}
        >
          <IconButton onClick={togglePlayPause}>
            {isPlaying ? (
              <PauseCircleFilledIcon sx={{ fontSize: 70, color: "#25BEDA" }} />
            ) : (
              <PlayCircleFilledIcon sx={{ fontSize: 70, color: "#25BEDA" }} />
            )}
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
