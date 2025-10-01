const Video = require("../models/Video");

module.exports = class VideoController {
  static cadastrarVideo(req,res) {
    res.render("videos/Cadastrar");
  }
  static async VideoCreate(req,res) {
    const video = {
      autor: req.body.autor,
      titulo: req.body.titulo,
      assunto: req.body.assunto,
      descricao: req.body.descricao,
      link: req.body.link
    }
    await Video.create(video);
    res.redirect("/");
  }

  static async listarVideos(req,res) {
    let videos = await Video.findAll({ raw:true });
    // Extrai o ID do vídeo do link do YouTube
    videos = videos.map(video => {
      // Extrai o ID do vídeo do YouTube
      const match = video.link.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/);
      const videoId = match ? match[1] : null;
      // Gera o link embed se o ID existir
      video.embedLink = videoId ? `https://www.youtube.com/embed/${videoId}` : video.link;
      return video;
    });
    res.render("videos/listar", {video: videos});
  }

  static async UpdateVideo(req,res) {
    const id_video = req.params.id_video;
    const video = await Video.findOne({where:{id_video: id_video}, raw : true})
    res.render("videos/update", {video})

  }
  static async VideoUpdate(req, res) {
    const id_video = req.body.id_video
    const video = {
      autor: req.body.autor,
      titulo: req.body.titulo,
      assunto: req.body.assunto,
      descricao: req.body.descricao,
      link: req.body.link
    }
    await Video.update(video, { where: { id_video:id_video }})
    res.redirect("/")
  }

  static async removerVideo(req,res) {
    const id_video = req.body.id_video;
    await Video.destroy({ where: { id_video: id_video }})
    res.redirect("/")
  }
}