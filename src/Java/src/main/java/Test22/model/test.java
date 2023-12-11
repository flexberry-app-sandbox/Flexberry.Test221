package Test22.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Test22.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: тест
 */
@Entity(name = "IISTest22тест")
@Table(schema = "public", name = "тест")
public class test {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "цена")
    private Integer цена;

    @Column(name = "Хуй")
    private String хуй;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "nom")
    @Convert("nom")
    @Column(name = "ном", length = 16, unique = true, nullable = false)
    private UUID _nomid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "nom", insertable = false, updatable = false)
    private nom nom;


    public test() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getцена() {
      return цена;
    }

    public void setцена(Integer цена) {
      this.цена = цена;
    }

    public String getХуй() {
      return хуй;
    }

    public void setХуй(String хуй) {
      this.хуй = хуй;
    }


}