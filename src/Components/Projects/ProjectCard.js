import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

const ProjectCard = ({ item, className }) => {
  const { src, alt, label, body, repo, site } = item;
  return (
    <Box maxWidth="300px" className={className}>
      <Card>
        <CardMedia component="img" height="160" image={src} alt={alt} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {label}
          </Typography>
          <div style={{ maxHeight: "45px", overflowY: "auto" }}>
            <Typography variant="body3" color="text.secondary">
              {body}
            </Typography>
          </div>
        </CardContent>
        <CardActions>
          <Button size="medium" href={site} target="_blank">
            Live Site
          </Button>
          <Button size="medium" href={repo} target="_blank">
            Repo
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ProjectCard;
