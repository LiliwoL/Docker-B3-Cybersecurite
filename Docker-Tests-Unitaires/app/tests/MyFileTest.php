<?php


use PHPUnit\Framework\TestCase;

class MyFileTest extends TestCase
{
    public function testSetFileName()
    {
        $file = new MyFile;

        $this->assertTrue($file->setFileName('newfile'));
        $this->assertTrue($file->setFileName('newfile1'));
        $this->assertTrue($file->setFileName('new_file'));
        $this->assertTrue($file->setFileName('new-file'));

        $this->assertFalse($file->setFileName(null));
        $this->assertFalse($file->setFileName('ThisFileNameIsVeryLongTooLongReallyTooLong'));
        $this->assertFalse($file->setFileName('NewFileWith.ext'));
        $this->assertFalse($file->setFileName('àfile'));
        $this->assertFalse($file->setFileName(1));
    }

    public function testSetExtension()
    {
        $file = new MyFile('newFile');

        $this->assertTrue($file->setExtension('txt'));

        $this->assertFalse($file->setExtension(null));
        $this->assertFalse($file->setExtension('abcdef'));
        $this->assertFalse($file->setExtension('é'));
        $this->assertFalse($file->setExtension(1));
    }

    public function testGetFileName()
    {
        $exceptedFileName = 'newFile';

        $file = new MyFile($exceptedFileName);

        $this->assertEquals($exceptedFileName, $file->getFileName());
    }

    public function testGetExtension()
    {
        $exceptedExtension = 'txt';

        $file = new MyFile('newFile', $exceptedExtension);

        $this->assertEquals($exceptedExtension, $file->getExtension());
    }
}
