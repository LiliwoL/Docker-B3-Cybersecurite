<?php

class MyFile
{
    protected $fileName;

    protected $extension;

    public function __construct($fileName = null, $extension = null)
    {
        if (!is_null($fileName)) {
            $this->setFileName($fileName);
        }

        if (!is_null($extension)) {
            $this->setExtension($extension);
        }
    }

    /**
     * Affecte un nom de fichier (de 1 à 32 caractères alphanumériques, trait d'union et sous-tiret compris).
     * @param string $fileName
     * @return boolean
     */
    public function setFileName($fileName)
    {
        if (!is_string($fileName)) {
            return false;
        }

        if (!preg_match('/^[a-z0-9-_]{1,32}$/i',$fileName)) {
            return false;
        }

        $this->fileName = $fileName;

        return true;
    }

    /**
     * Affecte une extension de fichier (de 1 à 5 caractères alphanumériques).
     * @param string $extension
     * @return boolean
     */
    public function setExtension($extension)
    {
        if (!is_string($extension)) {
            return false;
        }

        if (!preg_match('/^[a-z0-9]{1,5}$/i',$extension)) {
            return false;
        }

        $this->extension = $extension;

        return true;
    }

    /**
     * Retourne le nom de fichier.
     *
     * @return string
     */
    public function getFilename()
    {
        return $this->fileName;
    }

    /**
     * Retourne l'extension du fichier
     *
     * @return string
     */
    public function getExtension()
    {
        return $this->extension;
    }
}

?>